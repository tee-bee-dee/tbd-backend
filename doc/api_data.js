define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "status",
    "name": "status",
    "group": "Index",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>ok message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/index.js",
    "groupTitle": "Index"
  }
] });
