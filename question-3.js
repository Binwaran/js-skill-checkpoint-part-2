// เริ่มเขียนโค้ดตรงนี้
const getUsers = async()=>{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        const name17Letter = data.map(data=>data.name).filter(name=>name.length>17);
        console.log(name17Letter);
    } catch(error){
        console.log(error);
    }
};

getUsers();