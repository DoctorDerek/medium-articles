// A non-configurable key is set using Object.defineProperty()
Object.defineProperty(myObject, "name", { configurable: false })
// Non-configurable keys can't be deleted by the delete keyword
console.log(delete myObject.name) // false
