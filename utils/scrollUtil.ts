export const scrollIntoView = (id: string, callback?:() => void) => {
    const el: HTMLElement | null = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start"})
        if(callback){
            callback();
        };
    }
}