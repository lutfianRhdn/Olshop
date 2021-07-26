<?php

namespace App\Http\Traits;

use App\Http\Resources\CategoriesResource;
use Illuminate\Http\Request;

trait ApiTraits
{
     protected $request;
     protected $statusCodes = [
          'done' => 200,
          'created' => 201,
          'removed' => 204,
          'not_valid' => 400,
          'not_found' => 404,
          'conflict' => 409,
          'permissions' => 401,
          'error' => 500
     ];

     public function __construct(Request $request)
     {
          $this->request = $request;
     }

     public function index()
     {
          try {
               $m = self::MODEL;
               $request = $this->request->all();
               if (!empty($request)) {
                    $response = $m::select('*');

                    foreach ($request as $key => $row) {
                         $response->where($key, $row);
                    }

                    $response = $response->orderby('id', 'desc')->get();
                    return $this->respond('done', $response);
               } else {
                    return $this->respond('done', $m::all(), true);
               }
          } catch (\Illuminate\Database\QueryException $exception) {
               $errorInfo = $exception->errorInfo;
               return $this->respond('error', $errorInfo);
          }
     }

     public function show($id)
     {
          try {
               $m = self::MODEL;
               $model = $m::find($id);
               if (is_null($model)) {
                    return $this->respond('not_found');
               }
               return $this->respond('done', $model);
          } catch (\Illuminate\Database\QueryException $exception) {
               $errorInfo = $exception->errorInfo;
               return $this->respond('error', $errorInfo);
          }
     }

     public function store(Request $request)
     {
          try {
               $request_data = $request->all();

               if ($request->hasFile('file')) {
                    $filepath_prefix = '/uploads/' . $request->path() . '/';
                    $original_filename = $request->file('file')->getClientOriginalName();
                    $original_filename_arr = explode('.', $original_filename);

                    $file_ext = end($original_filename_arr);
                    $destination_path = '.' . $filepath_prefix;
                    $image = time() . '.' . $file_ext;

                    if ($request->file('file')->move($destination_path, $image)) {
                         $request_data['file'] = url($filepath_prefix . $image);
                    }
               }
               $m = self::MODEL;
               $request->validate($m::$rules);
               $created = $m::create($request_data);
               // dd($m);
               if ($m == 'App\Models\User') {
                    $created->assignRole('user');
               }
               return $this->respond('created', $created);
          } catch (\Illuminate\Database\QueryException $exception) {
               $errorInfo = $exception->errorInfo;
               return $this->respond('error', $errorInfo);
          }
     }

     public function update(Request $request, $id)
     {
          try {
               $request_data = $request->all();

               if ($request->hasFile('file')) {
                    $filepath_prefix = '/uploads/' . $request->path() . '/';
                    $original_filename = $request->file('file')->getClientOriginalName();
                    $original_filename_arr = explode('.', $original_filename);

                    $file_ext = end($original_filename_arr);
                    $destination_path = '.' . $filepath_prefix;
                    $image = time() . '.' . $file_ext;

                    if ($request->file('file')->move($destination_path, $image)) {
                         $request_data['file'] = url($filepath_prefix . $image);
                    }
               }

               $m = self::MODEL;
               $this->validate($request, $m::$rules);
               $model = $m::find($id);

               if (empty($model)) {
                    return $this->respond('not_found');
               } else {
                    $model->update($request_data);
                    return $this->respond('done', $model);
               }
          } catch (\Illuminate\Database\QueryException $exception) {
               $errorInfo = $exception->errorInfo;
               return $this->respond('error', $errorInfo);
          }
     }

     public function destroy($id)
     {
          try {
               $m = self::MODEL;
               $data = $m::find($id);
               if (is_null($data)) {
                    return $this->respond('not_found');
               }
               if ($data->delete()) {
                    return $this->respond('removed');
               } else {
                    return $this->respond('not_found');
               }
          } catch (\Illuminate\Database\QueryException $exception) {
               $errorInfo = $exception->errorInfo;
               return $this->respond('error', $errorInfo);
          }
     }

     protected function respond($status, $data = [], $isCollection = false)
     {
          $r = self::RESOURCE;
          if ($isCollection) {
               return ($r::collection($data))->additional([
                    'meta' => [
                         'status' => $this->statusCodes[$status],
                    ]
               ]);
          }
          if ($this->statusCodes[$status] > 202) {
               return response()->json([
                    'data' => $data,
                    "meta" => [
                         'status' => $status,
                         'code' => $this->statusCodes[$status]
                    ]
               ], $this->statusCodes[$status]);
          }
          return (new $r($data))->additional([
               'meta' => [
                    'status' => $this->statusCodes[$status],
               ]
          ]);
     }
}
