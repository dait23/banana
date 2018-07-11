import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import MetaTags from 'react-meta-tags';
import Featured from '../Featured/'
import Top from '../Top/'
import  MainContent from '../MainContent/'

class Home extends Component {


 renderBanner(){
  const xxx ="https://res.cloudinary.com/nomadic-id/image/upload/c_thumb,q_auto:best,h_300/v1526754397/ynwpgae7kvrck5obj8pq.png";



   if(localStorage.getItem('nordic') == null && localStorage.getItem('uid') == null ){


     return(

          <div>
          <Jumbotron style={{background:'#D7EFEE', borderRadius:'0px'}}>

             <div className="row">
               
               <div className="col-md-8">
                  <h1 style={{fontFamily:'Poppins, sans-serif',  fontSize:'33px', fontWeight:'600'}}>Welcome to Nomadic</h1>
                    <p className="lead" style={{fontSize:'22px', fontWeight:'500',  fontFamily:'-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'}}>Publishing place for everyone</p>
                    <hr className="my-2" />
                    <p style={{fontSize:'14px'}}>a free place to create, read storie or publishing ideas
 <br/> follow your interest topic, publisher straight on your homepage.</p>
                    <p className="lead">
                      <Button color="success" style={{borderRadius:'0px', padding:'10px 30px', margin:'20px 0px 0'}}> <a href="https://about.nomadic.co.id" style={{color:'#fff'}} alt="More">Learn More</a></Button>
                    </p>

               </div>
               <div className="col-md-4" style={{backgroundImage: `url(${xxx})`, backgroundRepeat:'no-repeat', backgroundPosition:'top center', height:'310px'}}>


               </div>

             </div>
           
          </Jumbotron>
        </div>
        )


   }else{

      return(

        <Top />

      )

   }



 }  


 renderIdul(){
  
   const banner = "https://res.cloudinary.com/nomadic-id/image/upload/v1528992131/unf8tgdqynot37rmvhm5.jpg";
   
   if(localStorage.getItem('nordic') == null && localStorage.getItem('uid') == null ){


     return(
     
          <Jumbotron style={{background:'#D7EFEE', borderRadius:'0px', padding:'5px 15px'}}>

              <div className="row">

                 <div className="col-md-12" style={{backgroundImage: `url(${banner})`, backgroundRepeat:'no-repeat', backgroundPosition:'top center', height:'400px'}}>



                 </div>

              </div>

          </Jumbotron>


      )


   }else{
    
     return(
      
       <Top />


      )
  
   } 

 } 


  render() {
   
   
    return (

        <div>

          <MetaTags>
                <title>Nomadic – Online Publishing Platform for Everyone</title>
                <meta name="Nomadic – Online Publishing Platform for Everyone" />
                <meta name="robots" content="index, follow" />
                <meta name="Googlebot" content="follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />  
                <meta name="referrer" content="always" />
                <meta name="theme-color" content="#000000" />
                <meta content="index, follow" />
                <meta name="description" content="Welcome to Nomadic, a place to publishing, read, write the stories. Every day, thousands of read, write, and share important stories on Nomadic." />
                <meta property="og:title" content="Nomadic – Online Publishing Platform for Everyone" />
                <meta property="og:description" content="Welcome to Nomadic, a place to publishing, read, write the stories. Every day, thousands of read, write, and share important stories on Nomadic." />
                <meta property="og:image" content="https://res.cloudinary.com/spazeeid/image/upload/v1521322663/cover_jjet5b.jpg" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.nomadic.co.id/" />

                <meta name="twitter:card" value="Welcome to Nomadic, a place to publishing, read, write the stories. Every day, thousands of read, write, and share important stories on Nomadic." />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@NomadicId" />
                <meta name="twitter:title" content="Nomadic – Online Publishing Platform for Everyone" />
                <meta name="twitter:description" content="Welcome to Nomadic, a place to publishing, read, write the stories. Every day, thousands of read, write, and share important stories on Nomadic." />
                <meta name="twitter:creator" content="@NomadicId" />
                <meta name="twitter:image:src" content="https://res.cloudinary.com/spazeeid/image/upload/v1521322663/cover_jjet5b.jpg" />

            </MetaTags>
      
  
     <section className="content">
        <div className="container">

            <Featured />
            {this.renderBanner()}
            <MainContent />


        </div>
    </section>
    
</div>
    )
  }
}




export default Home;
