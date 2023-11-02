
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/": {
        "get": {
          "operationId": "AppController_success",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          }
        }
      },
      "/auth/profile": {
        "get": {
          "operationId": "AuthController_profile",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/auth/login": {
        "post": {
          "operationId": "AuthController_login",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginInterFace"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/auth/sign-up": {
        "post": {
          "operationId": "AuthController_signUp",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SignUpInterface"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/auth/logout": {
        "post": {
          "operationId": "AuthController_logout",
          "parameters": [],
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/auth/refresh": {
        "post": {
          "operationId": "AuthController_refreshTokens",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/refreshTokensInterface"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/chi-tiet-loai-cong-viec/danh-sach-chi-tiet-loai-cong-viec": {
        "get": {
          "operationId": "ChiTietLoaiCongViecController_getTypeDetailJob",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ChiTietLoaiCongViec"
          ]
        }
      },
      "/chi-tiet-loai-cong-viec/tim-kiem-chi-tiet-loai-cong-viec/{id_type_detail}": {
        "get": {
          "operationId": "ChiTietLoaiCongViecController_findTypeDetailJob",
          "parameters": [
            {
              "name": "id_type_detail",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ChiTietLoaiCongViec"
          ]
        }
      },
      "/chi-tiet-loai-cong-viec/them-chi-tiet-loai-cong-viec": {
        "post": {
          "operationId": "ChiTietLoaiCongViecController_createTypeDetailJob",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TypeDetailInterface"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "ChiTietLoaiCongViec"
          ]
        }
      },
      "/chi-tiet-loai-cong-viec/cap-nhat-chi-tiet-loai-cong-viec/{id_type_detail}": {
        "put": {
          "operationId": "ChiTietLoaiCongViecController_updateTypeDetailJob",
          "parameters": [
            {
              "name": "id_type_detail",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateTypeDetailInterface"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ChiTietLoaiCongViec"
          ]
        }
      },
      "/chi-tiet-loai-cong-viec/cap-nhat-hinh-anh-chi-tiet-loai/{id_type_detail}": {
        "put": {
          "operationId": "ChiTietLoaiCongViecController_updateImgTypeDetail",
          "parameters": [
            {
              "name": "id_type_detail",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "description": "Upload image type details",
            "content": {
              "multipart/form-data": {
                "schema": {
                  "$ref": "#/components/schemas/FileUploadDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ChiTietLoaiCongViec"
          ]
        }
      },
      "/chi-tiet-loai-cong-viec/xoa-chi-tiet-loai/{id_type_detail}": {
        "delete": {
          "operationId": "ChiTietLoaiCongViecController_deleteTypeDetail",
          "parameters": [
            {
              "name": "id_type_detail",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ChiTietLoaiCongViec"
          ]
        }
      },
      "/cong-viec/danh-sach-cong-viec": {
        "get": {
          "operationId": "CongViecController_getJobList",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/cong-viec/tim-kiem-cong-viec/{id_job}": {
        "get": {
          "operationId": "CongViecController_findJob",
          "parameters": [
            {
              "name": "id_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/cong-viec/tim-cong-viec-theo-loai-cong-viec/{id_type_job}": {
        "get": {
          "operationId": "CongViecController_findJobByJobType",
          "parameters": [
            {
              "name": "id_type_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/cong-viec/tim-cong-viec-theo-chi-tiet-loai-cong-viec/{id_type_detail}": {
        "get": {
          "operationId": "CongViecController_findJobByTypeDetail",
          "parameters": [
            {
              "name": "id_type_detail",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/cong-viec/tim-cong-viec-theo-danh-muc-cong-viec/{id_job_catalog}": {
        "get": {
          "operationId": "CongViecController_findJobByJobCatalog",
          "parameters": [
            {
              "name": "id_job_catalog",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/cong-viec/them-cong-viec": {
        "post": {
          "operationId": "CongViecController_createJob",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JobInterface"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/cong-viec/cap-nhat-cong-viec/{id_job}": {
        "put": {
          "operationId": "CongViecController_updateJob",
          "parameters": [
            {
              "name": "id_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JobInterface"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/cong-viec/cap-nhat-hinh-anh-cong-viec/{id_job}": {
        "put": {
          "operationId": "CongViecController_updateImgJob",
          "parameters": [
            {
              "name": "id_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/cong-viec/xoa-cong-viec/{id_job}": {
        "delete": {
          "operationId": "CongViecController_deleteJob",
          "parameters": [
            {
              "name": "id_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "CongViec"
          ]
        }
      },
      "/loai-cong-viec/danh-sach-loai-cong-viec": {
        "get": {
          "operationId": "LoaiCongViecController_getTypeJobList",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "LoaiCongViec"
          ]
        }
      },
      "/loai-cong-viec/tim-kiem-loai-cong-viec/{id_type_job}": {
        "get": {
          "operationId": "LoaiCongViecController_findTypeJob",
          "parameters": [
            {
              "name": "id_type_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "LoaiCongViec"
          ]
        }
      },
      "/loai-cong-viec/tao-loai-cong-viec": {
        "post": {
          "operationId": "LoaiCongViecController_createTypeJob",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/createTypeJobInterface"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "LoaiCongViec"
          ]
        }
      },
      "/loai-cong-viec/cap-nhat-loai-cong-viec/{id_type_job}": {
        "put": {
          "operationId": "LoaiCongViecController_updateTypeJob",
          "parameters": [
            {
              "name": "id_type_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/createTypeJobInterface"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "LoaiCongViec"
          ]
        }
      },
      "/nguoi-dung/lay-danh-sach-nguoi-dung": {
        "get": {
          "operationId": "NguoiDungController_getUserList",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "NguoiDung"
          ]
        }
      },
      "/nguoi-dung/tim-kiem-nguoi-dung/{id_user}": {
        "get": {
          "operationId": "NguoiDungController_findUser",
          "parameters": [
            {
              "name": "id_user",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "NguoiDung"
          ]
        }
      },
      "/nguoi-dung/loai-nguoi-dung": {
        "get": {
          "operationId": "NguoiDungController_getTypeUser",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "NguoiDung"
          ]
        }
      },
      "/nguoi-dung/cap-nhat-nguoi-dung/{id}": {
        "put": {
          "operationId": "NguoiDungController_updateUser",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SignUpInterface"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "NguoiDung"
          ]
        }
      },
      "/thue-cong-viec/danh-sach-cong-viec-da-thue": {
        "get": {
          "operationId": "ThueCongViecController_getHireJobList",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ThueCongVIec"
          ]
        }
      },
      "/thue-cong-viec/tim-kiem-cong-viec-da-duoc-thue/{id_hire_job}": {
        "get": {
          "operationId": "ThueCongViecController_findHireJob",
          "parameters": [
            {
              "name": "id_hire_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ThueCongVIec"
          ]
        }
      },
      "/thue-cong-viec/them-cong-viec-duoc-thue": {
        "post": {
          "operationId": "ThueCongViecController_createHireJob",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HireJobInterface"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "ThueCongVIec"
          ]
        }
      },
      "/thue-cong-viec/xoa-cong-viec-da-thue/{id_hire_job}": {
        "delete": {
          "operationId": "ThueCongViecController_deleteHireJob",
          "parameters": [
            {
              "name": "id_hire_job",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "ThueCongVIec"
          ]
        }
      },
      "/danh-muc-cong-viec/danh-sach-danh-muc-cong-viec": {
        "get": {
          "operationId": "DanhMucCongViecController_getJobCatalog",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DanhMucCongViec"
          ]
        }
      },
      "/danh-muc-cong-viec/tim-kiem-danh-muc-cong-viec/{id_job_catalog}": {
        "get": {
          "operationId": "DanhMucCongViecController_findJobCatalog",
          "parameters": [
            {
              "name": "id_job_catalog",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DanhMucCongViec"
          ]
        }
      },
      "/danh-muc-cong-viec/them-danh-muc-cong-viec": {
        "post": {
          "operationId": "DanhMucCongViecController_createJobCatalog",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JobCatalogInterface"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "DanhMucCongViec"
          ]
        }
      },
      "/danh-muc-cong-viec/cap-nhat-danh-muc-cong-viec/{id_job_catalog}": {
        "put": {
          "operationId": "DanhMucCongViecController_updateJobCatalog",
          "parameters": [
            {
              "name": "id_job_catalog",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JobCatalogInterface"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DanhMucCongViec"
          ]
        }
      },
      "/danh-muc-cong-viec/xoa-danh-muc-cong-viec/{id_job_catalog}": {
        "delete": {
          "operationId": "DanhMucCongViecController_deleteJobCatalog",
          "parameters": [
            {
              "name": "id_job_catalog",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "DanhMucCongViec"
          ]
        }
      }
    },
    "info": {
      "title": "Swagger",
      "description": "",
      "version": "1.0.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "securitySchemes": {
        "bearer": {
          "scheme": "bearer",
          "bearerFormat": "JWT",
          "type": "http"
        }
      },
      "schemas": {
        "LoginInterFace": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "description": "email"
            },
            "password": {
              "type": "string",
              "description": "password"
            }
          },
          "required": [
            "email",
            "password"
          ]
        },
        "SignUpInterface": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "description": "email"
            },
            "password": {
              "type": "string",
              "description": "password"
            },
            "name": {
              "type": "string",
              "description": "name"
            },
            "phone": {
              "type": "string",
              "description": "phone"
            },
            "birth_day": {
              "format": "date-time",
              "type": "string",
              "description": "birth_day"
            },
            "gender": {
              "type": "boolean",
              "description": "gender"
            },
            "role": {
              "type": "string",
              "description": "role"
            },
            "skill": {
              "type": "string",
              "description": "skill"
            },
            "certification": {
              "type": "string",
              "description": "certification"
            }
          },
          "required": [
            "email",
            "password",
            "name",
            "phone",
            "birth_day",
            "gender",
            "role",
            "skill",
            "certification"
          ]
        },
        "refreshTokensInterface": {
          "type": "object",
          "properties": {}
        },
        "TypeDetailInterface": {
          "type": "object",
          "properties": {
            "detail_name": {
              "type": "string",
              "description": "detail_name"
            },
            "id_type_job": {
              "type": "string",
              "description": "id_type_job"
            },
            "image": {
              "type": "string",
              "description": "image",
              "format": "binary"
            }
          },
          "required": [
            "detail_name",
            "id_type_job",
            "image"
          ]
        },
        "UpdateTypeDetailInterface": {
          "type": "object",
          "properties": {
            "detail_name": {
              "type": "string",
              "description": "detail_name"
            },
            "id_type_job": {
              "type": "string",
              "description": "id_type_job"
            }
          },
          "required": [
            "detail_name",
            "id_type_job"
          ]
        },
        "FileUploadDto": {
          "type": "object",
          "properties": {
            "fileUpload": {
              "type": "string",
              "format": "binary"
            }
          },
          "required": [
            "fileUpload"
          ]
        },
        "JobInterface": {
          "type": "object",
          "properties": {
            "job_name": {
              "type": "string",
              "description": "job_name"
            },
            "rate": {
              "type": "string",
              "description": "rate"
            },
            "salary": {
              "type": "number",
              "description": "salary"
            },
            "describe": {
              "type": "string",
              "description": "describe"
            },
            "short_description": {
              "type": "string",
              "description": "short_description"
            },
            "star": {
              "type": "number",
              "description": "star"
            },
            "id_job_catalog": {
              "type": "string",
              "description": "id_job_catalog"
            },
            "id_creator": {
              "type": "string",
              "description": "id_creator"
            }
          },
          "required": [
            "job_name",
            "rate",
            "salary",
            "describe",
            "short_description",
            "star",
            "id_job_catalog",
            "id_creator"
          ]
        },
        "createTypeJobInterface": {
          "type": "object",
          "properties": {
            "type_job_name": {
              "type": "string",
              "description": "type_job_name"
            }
          },
          "required": [
            "type_job_name"
          ]
        },
        "HireJobInterface": {
          "type": "object",
          "properties": {
            "id_job": {
              "type": "string",
              "description": "id_job"
            },
            "id_user": {
              "type": "string",
              "description": "id_user"
            }
          },
          "required": [
            "id_job",
            "id_user"
          ]
        },
        "JobCatalogInterface": {
          "type": "object",
          "properties": {
            "name_job_catalog": {
              "type": "string",
              "description": "name_job_catalog"
            },
            "id_type_detail": {
              "type": "string",
              "description": "id_type_detail"
            }
          },
          "required": [
            "name_job_catalog",
            "id_type_detail"
          ]
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
