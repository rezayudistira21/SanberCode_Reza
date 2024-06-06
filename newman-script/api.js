const newman = require("newman")

newman.run({
    collection: "json-collect/SanberCode.postman_collection.json",
    environment: "json-env/ENV.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
