import { create } from "zustand";

//el set y get son propios de zustand
export const useCounterStore = create((set,get) => ({
    count:10,
    name:'Hola',
    posts:[],
    increment: (value) => set(state => ({
        count:state.count + value
    })),
    getPosts: async () => {
        const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        //const posts = await res.json()
        //console.log(posts)
        set(state => ({
            ...state,
            posts
        }))
    },
    clearStore: ()=>{
        set({}, true) //limpia todo el estado hasta las funciones
    },
    multiply:(value) => {
        const {count} = get()
        set({count: count * value})
    }
}));