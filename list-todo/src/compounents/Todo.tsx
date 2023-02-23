    import { FormEvent, useEffect, useRef, useState } from "react"
    import objectTodos from "./ModelObj"
    import TodoListes from "./TodoListes"
    import "../styles/ListTodosStyle.css";
    import {TiDelete} from "react-icons/ti"
    import {RiStarSmileFill} from "react-icons/ri";
    import {TiStarFullOutline} from "react-icons/ti"
    import {TbArrowBigUpLines} from "react-icons/tb"
    import Confirmeds from "./Confirmeds";
    import {BsSunFill} from "react-icons/bs"
    import {BsFillMoonStarsFill} from "react-icons/bs"

    const Todo: React.FC  = () => {

        const saveDataInLocalStroage = () =>  {

            let storageData = localStorage.getItem("task")

            if(storageData) {

                return JSON.parse(localStorage.getItem("task") || "")

            }else{

                return []
            }
        }

        const [todo, setTodo] = useState<string>("")
        const [objTodo, setObjTodo] = useState<objectTodos[]>(saveDataInLocalStroage())
        const [confirmedes, setConfirmedes] = useState<boolean>(false)
        const [btn, setBtn] = useState<boolean>(false)
        const [btnLight, setBtnLight] = useState<boolean>(true)
        const [btnNight, setBtnNight] = useState<boolean>(false)


        const refs:React.MutableRefObject<any> = useRef();

        const clearAllItems = () => {
            localStorage.clear();
            setObjTodo([])
        }

        useEffect(() => {
            refs.current?.focus();
        },[todo])

        const handelForm = (e :FormEvent) =>  {

            e.preventDefault();
            
            if(todo) {

                setObjTodo([...objTodo, {id: new Date().getTime(), names: todo, isDane: false, showEdeting:false, completed:false, completedCount: 0}])
                setTodo("")
            }
        }

        const mm = objTodo.reduce((acc, curr): any => {

            let getCount: number = acc += curr.completedCount;

            return getCount
        },0)

        const btnScroling = () => {

            window.onscroll = () => {
                window.scrollY > 500 ? setBtn(true) : setBtn(false)
            }
        }

        const scrollTop = () => {

            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
        
            
        useEffect(() => {
            btnScroling()
        }, [])
    

        useEffect(() => {
            localStorage.setItem("task", JSON.stringify(objTodo) || "")
        }, [objTodo])



    //     const easy = 50
    //     const hard = 50
    //     const meduim = 50
    //     const veryHard = 50


    // enum nums {    
    //     easy = 50,
    //     hard = 50,
    //     meduim = 50,
    //     veryHard = 50
    // }

    // type arrThree = (string | number | boolean|(string|number)[])[]

    // const arr : (string|number|boolean|(string|number)[])[] = ['ahmed', 52, 'mounir', 'wael',true, ["wael", 5, "kais"], true, false]

    // const arrTwo : arrThree = ["moez", 55, true, ["moez", 30, 'ok', "abir"] ]

    // const arrFive : [number, string, boolean] = [5, "ok", false]  // prifix arr only 3 elemnts of arry with has clasification

    // console.log(arrFive)

    // console.log(arr)

    // console.log(arrTwo)

    // function arrFoor (numOne: number, numTw:number, numFoor ? : number) : number {

    //     return numOne + numTw
    // }

    // console.log(arrFoor(5, 5))

    // type all = {
    //     go: string,
    //     first:string;
    //     goFirst:number
    // }

    // type b = all & {

    //     s:string
    // }

    // function hh (my:b) {

    //     return `go is ${my.go} and first is ${my.first} and goFirst is ${my.goFirst}`
    // }

    // console.log(hh({go: "go", first: "first", goFirst: 10, s:"ok"}))

    // const arrSix : readonly [number, string] = [30, "moez"] // this arr for redOnly you are can not pushing anther elments is this array


    // const [id, name] = arrSix

    // console.log(id)
    // console.log(name)

    // const data : any = "1000"

    // const dataAnyAsString = data as string // typeScript his not cheking data type because i fixed data type with as string

    // const stringRepete = dataAnyAsString.repeat(2)

    // console.log(stringRepete);

    // interface hello {

    //     id:number,
    //     seyHello(): string,
    //     seyHi : () => string
    // }

    // interface heelo extends hello {

    //     jobs:string
    // }

    // const obj : heelo = {

    //     id:1,
    //     seyHello () {
    //         return 'hello'
    //     },

    //     seyHi : () => {

    //         return "hi"
    //     },

    //     jobs:"front-end-devoloper"
    // }

    // function test (byns:hello) {

    //     return `hi${byns.id} welcome and ${byns.seyHello()} and ${byns.seyHi()}`
    // }

    // console.log(test({id:5, seyHello() {
    //     return "ok"
    // }, seyHi : () => "ok"}))

    // console.log(obj.id)
    // console.log(obj.seyHello())
    // console.log(obj.seyHi())

    // // defrence iterface and types: with types you can not extends any anther types and with interfice you cant 
    // // extends your interfaces with defrent pages

    // interface one {
    //     name:string,
    //     age:number,
    //     country: string
    // }

    // interface two extends one {
    //     job: string
    // }

    // const objTest : two = {
    //     name:"moez",
    //     age:30,
    //     country:"tunisia",
    //     job:"devolopper"
    // }

    // console.log(objTest)


    // const datesNew : any  = new Date().getHours()

    // const ff = () : any => {
    //     console.log(datesNew)
    //     return datesNew > 20 && console.log("hours")
    // }

    // useEffect(() => {
    //     ff()
    // }, [])

    const ff = setTimeout(() => {
        setAlerConfirmed(false)
    }, 4000)

    const [alertConfiremd, setAlerConfirmed] = useState<boolean>(false)

        const dd = () => {

            if(alertConfiremd) {

                return ff 
                
            }
        }

    return (
    
        <div className={btnNight ? "background" : ""}>
        
            <div className={confirmedes ? "container" : ""} >

            <div className="light-night-container">

            <button className={btnLight === true ? "lightSun" : "light"} 
            
            onClick={() => {

                setBtnLight(true)
                setBtnNight(false)
                if(btnLight === false) {
                    setBtnNight(false)
                }

            }}><BsSunFill/></button>

            <button onClick={() => {

                setBtnNight(true)
                setBtnLight(false)
                if(btnNight === false) {
                    setBtnLight(false)
                }else {
                    return;
                }

            }} className={btnNight === true ? "night-click" : "night"}>
                
                <BsFillMoonStarsFill/></button>

            </div>

            <h1 className= { window.scrollY >= 300  ? "underline-backgraound" : "title-list-todo" }> Todo List </h1>
            <div className="underline-title" style={btnNight ? {borderBottom: "8px solid rgba(0, 0, 255, 0.68)"} : {borderBottom: "8px solid rgba(0, 0, 255, 0.959"}}> 
                    <div className="actions-btns">
                        <button className="star-completed" style={btnLight ?  {color: "gold"} : {color: "rgba(255, 217, 0, 0.683)", animation: "animStar 0.80s linear"} }>{mm === 0 ? <TiStarFullOutline/> : <RiStarSmileFill/>} </button>
                        <h3 className="actions-btns Completeds-Tasks-count"> {mm === 0 ? "" : mm} </h3>
                        <span className="Completeds-Tasks-title">Tasks completeds</span>
                    </div>
                    <div className="actions-btns">
                        <span>Rmove All Tasks</span>
                        <button onClick={() => {
                            setAlerConfirmed(true)
                            dd()
                        objTodo.length > 0 && setConfirmedes(true)
                    }} className="removeAll"> <TiDelete/> </button>
                    </div>
            </div>
            <form onSubmit={handelForm} className="form">
                <input className="inp-tasks-todo" style={btnNight ? {backgroundColor:"#f931315c"} : {backgroundColor:"rgba(255, 0, 0, 0.644"}} type="text" value={todo} placeholder="tasks..." ref={refs} onChange={(e) => {
                    setTodo(e.target.value)
                }} />

                <button type="submit" className="btn-submit">Go
                </button>
            </form>

            <div>
                <TodoListes btnDark={btnNight} newTodo={objTodo} alertConfiremd={alertConfiremd} confirm={confirmedes}  firstName={todo} newSetObjTodo={setObjTodo} />
            </div>
            <div className="bloc-removeAll"></div>
        </div>

            {confirmedes  && <div className="bloc-confirmeds" style={btnNight ? {color:"black"} : {}}>
                <Confirmeds validConfirmed={clearAllItems} confirmedState={setConfirmedes}/>
            </div>}

            {btn === true ? <button onClick={() => {
                scrollTop()
            }} className="scrol-btn" style={btnNight ? {backgroundColor:"rgba(255, 0, 0, 0.534"} : {backgroundColor:"rgba(255, 0, 0, 0.792"}}><TbArrowBigUpLines/></button> : ""}

        </div>
    )
    }

    export default Todo