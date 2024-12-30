//async await
async function fun1() {
    setTimeout(()=>{
      console.log("Hello");
      },5000);
      console.log(await"hello")
    }
    arrowfunc = async()=>{
      setTimeout(()=>{
        console.log("KEC");
      },4000);
      console.log(await "kec")
    }
    fun1();
    arrowfunc();