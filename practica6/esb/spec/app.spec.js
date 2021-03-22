var Request = require("request");


describe("Server",()=>{
    var server;
    beforeAll(()=>{
        server = require("../app");
    });
    afterAll(()=>{
        server.close();
    });
    describe("GET /",()=>{
        var data = {};
        beforeAll((done)=>{
            Request.get("http://localhost:5050/",(err,resp,body)=>{
                data.status = resp.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200",()=>{
            expect(data.status).toBe(200);
        });
        it("Status 200",()=>{
            expect(data.body).toBe("Server up");
        });
    });
});