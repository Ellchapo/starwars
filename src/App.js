
import './App.css';
import { useEffect,useState } from 'react';
import Card from './Card';


function App() {

  const [stars,setStars]=useState([]);
  const [cstars,setCStars]=useState([]);
  let a=[];
  
  useEffect(()=>{
    const fn=async ()=>{
   let data  = await fetch("https://swapi.dev/api/people/?page=1");
   let Jdata = await data.json();
   console.log(Jdata)
   for(let r of Jdata.results){
    const {name,height,films}=r;
    a=[...a,{ name,height,films,fname:[]}]
   }
   //console.log(a)
    }
    fn().then(()=>{//setStars([...a]) 
      let fd=a;
      const fnt=async ()=>{
        for(let s=0;s<fd.length; s++){
          let fln=[];
          for(let f of fd[s].films){
            let data  = await fetch(f);
            let Jdata = await data.json();
            console.log(Jdata)
            fln.push(Jdata.title)
          }
          fd[s].fname.push(...fln);
        }
        
      }
    fnt().then(()=>{
    setStars(()=>fd)
    })
      
    });
    //async
    console.log(a)
    //setStars([...a]);
  },[])
 console.log(stars)

//  useEffect(()=>{
//    let fd=stars;
//   const fn=async ()=>{
//     for(let s=0;s<fd.length; s++){
//       let fln=[];
//       for(let f of fd[s].films){
//         let data  = await fetch(f);
//         let Jdata = await data.json();
//         console.log(Jdata)
//         fln.push(Jdata.title)
//       }
//       fd[s].fname.push(...fln);
//     }
    
//   }
// fn().then(()=>{
// setStars(fd)
// })
//  },[])
 useEffect(()=>{
  if(stars){
    setCStars([stars[0],stars[1],stars[2]])
    }
 },[stars])
 

 let id=0
  const deleteHandler=(ide)=>{
   // console.log(ide)
    let ic=cstars.filter((v,i)=>{
      return(ide!=i)
    })
    
      setCStars((p)=>[...ic])
    
  }

  const addHandler=()=>{
    console.log(id)
    let ic=stars.filter((v,i)=>{
       console.log(id)
        console.log(i)
      return(id==i)
      //type difference
    })
    console.log(ic)
    setCStars((p)=>[...p,...ic])
  }

  const keyH=(e)=>{
   id=e.target.value;
  }
  return (
    <div className="App">List of Star Wars characters
    <br/><p/>
    <p/>
     {stars && (cstars.length<=3) &&
      <div>
     <Card {...cstars[0]}  />
     <Card {...cstars[1]}  />
     <Card {...cstars[2]}  />
     </div>
     }
     {cstars && (cstars.length > 3) &&
      <div>
        {
          cstars.map((v,i)=>{
           return<Card {...v} id={i} dh={deleteHandler} />
             
          })
        }
     </div>
     }
     <select  onChange={keyH}>
      <option disabled="disabled" selected='selected'>Select a character</option>
      {stars &&
        stars.map((v,i)=>{
          return <option value={i} key={i} >{v.name}</option>
        })
      }
     </select>
     <button onClick={addHandler}>Add</button>

    </div>
  );
}

export default App;
