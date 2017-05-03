define({ "api": [
  {
    "type": "post",
    "url": "/date/format",
    "title": "Format date",
    "name": "FormatDate",
    "group": "Date",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date to be formatted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": "{\n  \"date\": \"11031995\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Formatted Date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"date\": \"11-03-1995\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/date.js",
    "groupTitle": "Date"
  },
  {
    "type": "post",
    "url": "/date/isValid",
    "title": "Validate date",
    "name": "ValidateDate",
    "group": "Date",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date2",
            "description": "<p>Date to be validated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request:",
          "content": "{\n  \"date2\": \"11-03-1995\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "valid",
            "description": "<p>True if valid date, else false.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"valid\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/date.js",
    "groupTitle": "Date"
  },
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
