/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 // This function reads the html page
 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();
 });
 
 // This carries out the mock testing
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
     test("h1 should exist", () => {
         expect(document.getElementsByTagName("h1").length).toBe(1);
     });
 });