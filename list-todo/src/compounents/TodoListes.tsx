import objectTodos from "./ModelObj"
import { useEffect, useRef, useState } from "react";
import {AiTwotoneDelete} from "react-icons/ai";
import {BsFillPencilFill} from "react-icons/bs";
import {FcApproval} from "react-icons/fc";
import {GiRoundStar} from "react-icons/gi"

    interface props {

        newTodo: objectTodos[],
        newSetObjTodo: React.Dispatch<React.SetStateAction<objectTodos[]>>,
        firstName:string,
        btnDark:boolean,
        confirm: boolean,
        alertConfiremd:boolean
    }

    const TodoListes : React.FC<props> = ({newTodo, newSetObjTodo, btnDark, confirm, alertConfiremd})  =>  {

        const [edit, setEdit] = useState<string>('')

        const editing = (todoId : string|number) => {

            !confirm && newSetObjTodo(newTodo.map((item) => item.id === todoId ? {...item, names : edit, isDane: false, showEdeting: false} : item ))
        }

        const isEditingFunc = (tId: string|number|boolean) => {

            !confirm && newSetObjTodo(newTodo.map((item) => item.id === tId ? {...item, isDane: true, showEdeting: true} : {...item, isDane: false, showEdeting: false}))
        }

        const showFalse = (tId: string|number) => {

            !confirm &&  newSetObjTodo(newTodo.map((item) => item.id === tId ? {...item, isDane: false, showEdeting: false} : item))

        }

        const removeItem = (idRemove: string|number) => {

            !confirm &&  newSetObjTodo(newTodo.filter((item) => item.id !== idRemove))
        }

        const completeds = (tId: string|number) => {

            !confirm && newSetObjTodo(newTodo.map((item) => item.id === tId ? {...item, completed: true, completedCount: item.completedCount = item.completedCount + 1}: item))
        }

        const checkBeforEditingForCompleted = (tId: string|number, task:objectTodos)  => {

            if(task.isDane !== false && task.completed === true && !confirm ) {

                return newSetObjTodo(newTodo.map((item) => item.id === tId ? {...item, completed:false, completedCount: item.completedCount = item.completedCount - 1} : item )) 

            }
        }

        const refUse = useRef<HTMLInputElement>(null);

        useEffect(() => {
            refUse.current?.focus()
        }, [edit])  
        
        
        if(newTodo.length === 0) {

            return  <div>
                        <h1 className= {alertConfiremd ? "alertEmptyTask" : "no-task" } > There is no task</h1>
                    </div>
        }

    return (
        <>
        {
            newTodo.map((t) => {

                return(
                    <div className="bloc-container" key={t.id}>
                    <div className="container-todos" style={btnDark ? {backgroundColor:"#f9313174"} : {backgroundColor:"#f93131e2"}}
>
                        <div> {t.isDane !== false ? 
                            <input ref={refUse} type= "text" defaultValue={t.names} placeholder="update task" className="inp-update" onChange={(e) => {
                                setEdit(e.target.value)
                                if(e.target.value !== edit) {
                                    checkBeforEditingForCompleted(t.id, t);
                                }
                            }} /> : <div className="names-bloc"> 
                                        <h1>{t.names}</h1>
                                        <div className={t.completed ? "gold-line" : "transparent-Line"}></div>
                                    </div>
                        }       </div>

                        <div className="btns-actions">

                        <button className="btns remove" onClick={() => {
                            removeItem(t.id)
                            }}><AiTwotoneDelete/></button>

                            <button onClick={() => {
                                isEditingFunc(t.id)
                                setEdit("")
                            }} className="btns isEditing" ><BsFillPencilFill/></button>

                            {
                                t.showEdeting && <button className="btns btn-valid-edit" onClick={() => {
                                    edit !== "" &&
                                    editing(t.id)
                                    setEdit('')
                                    !edit && showFalse(t.id)
                                }}><FcApproval/></button>
                            }
                            
                            {
                                !t.isDane && <button className={t.completed ? "btn-valid" : "btn-valid-white"} onClick={() => { 
                                    t.completed ? newSetObjTodo(newTodo.map((item) => item.id === t.id ? {...item, completed: false, completedCount: item.completedCount - 1}: item)): completeds(t.id)
                                }}><GiRoundStar/></button>
                            }
                        </div>
                    </div>
                </div>
                )
            })

        }
        </>
    )
    }

    export default TodoListes