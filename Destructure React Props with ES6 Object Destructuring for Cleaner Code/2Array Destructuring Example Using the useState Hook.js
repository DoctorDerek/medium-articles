const [name, setName] = useState("Stanny Staunton")
// useState returns an array with two elements

// Array destructuring is a briefer syntax for this code:
const arrayFromUseState = useState("Stanny Staunton")
const nameInState = arrayFromUseState[0]
const setNameInState = arrayFromUseState[1]
// equivalent to:
const [name2, setName2] = arrayFromUseState
