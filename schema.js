export default {
  "type": "object",
  "title": "CustomerModel",
  "additionalProperties": false,
  "description": "The fields to fill in for a particular customer",
  "required": [
    "last_name",
    "first_name",
    "civility",
    "address"
  ],
/*   "$meta": {
    "reference": "A",
    "id": 46261987,
    "type": "MAIN"
  }, */
  "properties": {
    "last_name": {
      "type": "string",
      "description": "Last name",
      "examples": [
        "Smith"
      ],
      "pattern": "^[^0-9]{0,30}$"
    },
    "first_name": {
      "type": "string",
      "description": "First name",
      "examples": [
        "Tom"
      ],
      "pattern": "^[^0-9]{0,20}$"
    },
    "civility": {
      "type": "string",
      "description": "Civility",
      "examples": [
        "MR"
      ],
      "pattern": "^[^0-9]{0,10}$"
    },
    "birthdate": {
      "type": "string",
      "description": "Date of birth",
      "examples": [
        "19870625"
      ]
    },
    "email": {
      "type": "string",
      "description": "Email",
      "examples": [
        "tom@example.com"
      ],
      "pattern": "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
    },
    "gm_number": {
      "type": "string",
      "description": "Great member number (not editable)",
      "examples": [
        "123456789"
      ]
    },
    "address": {
      "additionalProperties": false,
      "type": "object",
      "required": [
        "country_code"
      ],
      "properties": {
        "additional_information_1": {
          "type": "string",
          "description": "additional information such as one's host or building",
          "examples": [
            "Chez M. Dupont"
          ],
          "maxLength": 35
        },
        "number": {
          "type": "string",
          "description": "Location number",
          "examples": [
            "15"
          ],
          "maxLength": 10
        },
        "street": {
          "type": "string",
          "description": "Location street",
          "examples": [
            "AVENUE DES CHAMPS ELYSEES"
          ],
          "maxLength": 30
        },
        "add_on": {
          "type": "string",
          "description": "additional information (eg: floor number)",
          "examples": [
            "A6"
          ],
          "maxLength": 10
        },
        "city": {
          "type": "string",
          "description": "City name",
          "examples": [
            "Aix-en-Provence"
          ],
          "maxLength": 30
        },
        "state_or_district": {
          "type": "string",
          "description": "administrative division",
          "examples": [
            "CA"
          ],
          "maxLength": 10
        },
        "zip_code": {
          "type": "string",
          "description": "Postal code",
          "examples": [
            "75000"
          ],
          "maxLength": 10,
          "pattern": "^(\\d\\d\\d\\d\\d(\\d|\\w|\\s|[*-/])?(\\d|\\w|\\s|[*-/])?(\\d|\\w|\\s|[*-/])?(\\d|\\w|\\s|[*-/])?(\\d|\\w|\\s|[*-/])?)?$"
        },
        "country": {
          "type": "string",
          "description": "Country",
          "examples": [
            "FRANCE"
          ],
          "maxLength": 35
        },
        "country_code": {
          "type": "string",
          "description": "ISO 3166-1 alpha-2 country code",
          "examples": [
            "FR"
          ],
          "maxLength": 2
        }
      }
    },
    "phones": {
      "minItems": 0,
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "type",
          "number"
        ],
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "MOBILE"
            ],
            "description": "Phone type",
            "examples": [
              "MOBILE"
            ]
          },
          "number": {
            "type": "string",
            "pattern": "^.{0,20}$",
            "description": "Phone number",
            "examples": [
              "0623456789"
            ]
          }
        }
      }
    },
    "travel_documents": {
      "type": "object",
      "additionalProperties": false,
      "required": [],
      "properties": {
        "passport": {
          "type": "object",
          "additionalProperties": false,
          "required": [],
          "properties": {
            "document_number": {
              "type": "string",
              "description": "Document number",
              "examples": [
                "242343"
              ],
              "pattern": "^.{0,30}$"
            }
          }
        }
      }
    }
  },
  "anyOf": [
    {
      "type": "object",
      "required": [
        "phones"
      ],
      "properties": {
        "phones": {
          "type": "array",
          "minItems": 1
        }
      }
    },
    {
      "type": "object",
      "required": [
        "email"
      ]
    }
  ]
}