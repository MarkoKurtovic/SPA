class DB{

    static getAll(){

        return new Promise((resolve, reject)=>{
            let xml = new XMLHttpRequest();
            xml.onreadystatechange = () =>{
                if(xml.readyState== 4 && xml.status==200){
                    //xml.responseText
                    resolve(JSON.parse(xml.responseText));
                }

            }
            xml.open('GET', 'get_data.php')
            xml.send();
            

            

        })
    }


    static save(newAcc){

        return new Promise((resolve, reject)=>{
            let xml = new XMLHttpRequest();
            xml.onreadystatechange = () =>{
                if(xml.readyState == 4 && xml.status == 200){
                    //xml.responseText
                    resolve(xml.responseText);
                    console.log(xml.responseText);
                }

            }
            xml.open('POST', 'save_data.php');
            xml.setRequestHeader("Content-type", "/aplication/json");
            
            xml.send(JSON.stringify(newAcc));
            

            

        })
    }

    static update(updateAcc){

        return new Promise((resolve, reject)=>{
            let xml = new XMLHttpRequest();
            xml.onreadystatechange = () =>{
                if(xml.readyState == 4 && xml.status == 200){
                    //xml.responseText
                    resolve(xml.responseText);
                    console.log(xml.responseText);
                }

            }
            xml.open('POST', 'update_data.php');
            xml.setRequestHeader("Content-type", "/aplication/json");
            
            xml.send(JSON.stringify(updateAcc));
            

            

        })
    }


    static delete(data){

        return new Promise((resolve, reject)=>{
            let xml = new XMLHttpRequest();
            xml.onreadystatechange = () =>{
                if(xml.readyState == 4 && xml.status == 200){
                    //xml.responseText
                    resolve(xml.responseText);
                }

            }
            xml.open('POST', 'delete_data.php');
            xml.setRequestHeader("Content-type", "/aplication/json");
            
            xml.send(JSON.stringify(data));
            

            

        })
    }
    
}