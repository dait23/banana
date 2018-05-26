import React, {Component} from 'react';

import { Link} from 'react-router-dom'
import {MainApi, Cloudinary_Name} from '../Api/';
import {Image} from 'cloudinary-react';
import MetaTags from 'react-meta-tags';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import Status from './Status';
import Story from './Story'
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');





class Publishing extends Component {


  static propTypes = {
    router: PropTypes.object
  }


  constructor(props) {
    super(props)
    this.state = { 
      posts:[],
      data:'',
      loading: true,
    }
  
  }

  ////////////////// did mount 
  componentDidMount() {
    var that = this;
    that.getData();
  }

  //
  ////////////////////get data

  getData(){
     var that = this;
     that.setState({
          loading: true
      });
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            query Publishing($slug: String) {
              Publishing(slug: $slug){
              
                id
                name
                slug
                description
                avatarId
                avatarUrl
                coverId
                web
                facebook
                twitter
                instagram
                coverUrl
                createdAt
                posts(filter:{
    isPublished:true
  }, orderBy: createdAt_DESC){
                  id
                  title
                  slug
                  headline
                  imageId
                  imageUrl
                  reading
                  createdAt
                  user{
                  facebookUserId
                  avatar
                  username
                    member{
                      firstName
                      lastName
                    }
                  }

                }

             
              }
            }
          `
          var queryVars = {
            slug: this.props.match.params.slug
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {

            //console.log(results)
            if (results.errors) {
             // console.log('cccc')
              //...
              window.location= "/";
            }
            //var BlogCategory = results.data.BlogCategory


           if ( results.data.Publishing == null){

                window.location= "/404";

           }else{

              that.setState({
              data: results.data.Publishing,
              id:results.data.Publishing.id,
              name:results.data.Publishing.name,
              slug:results.data.Publishing.slug,
              description:results.data.Publishing.description,
              web:results.data.Publishing.web,
              facebook:results.data.Publishing.facebook,
              twitter:results.data.Publishing.twitter,
              instagram:results.data.Publishing.instagram,
              avatarUrl:results.data.Publishing.avatarUrl,
              avatarId:results.data.Publishing.avatarId,
              coverUrl:results.data.Publishing.coverUrl,
              coverId:results.data.Publishing.coverId,
              email:results.data.Publishing.email,  
              posts:results.data.Publishing.posts,  
              loading:false
             });


           }

          
           
          })
 

  }
 


 renderPost(){
  
   const postList = this.state.posts || []


   if(postList == ''){

    return(
            
           <div className="col-md-4 col-sm-4">
            
            No Publications
           </div>


      )

   }else{


     return(

       <div>

          {postList.map((post) => (
                      <Story
                        key={post.id}
                        post={post}
                        refresh={() => this.props.data.refetch()}
                      />
                    ))}
      </div>
      )

   }

    

 }


  render() {
    const xxx = this.state.coverUrl;
   if (this.state.loading) {
      return (

         <section className="article-detail-newyork">
             
           <figure className="big-post-image">
             <div className="over-content">
               <div className="middle-content">

                  <div className="inner">
                      <div className="row">

                              <div className="col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-5">
                 
                               <span className="post-author">

                                <ReactPlaceholder type='round'  showLoadingAnimation={true} delay={1000} ready={false} color='#E0E0E0' style={{ width: 80, height: 80 }}>
                                  <div></div>
                                </ReactPlaceholder>

                                <ReactPlaceholder type='textRow' showLoadingAnimation={true} delay={1000} ready={false} color='#E0E0E0' style={{marginTop: 10}}>
                                 <div></div>
                                </ReactPlaceholder>


                               </span>
                                <div className="post-metas">
                                  
                                     
                                <ReactPlaceholder type='textRow' showLoadingAnimation={true} delay={1000} ready={false} color='#E0E0E0' style={{marginTop: 10}}>
                                 <div></div>
                                </ReactPlaceholder>



                                
                                </div>


                             </div>

                      </div>
                  </div>

               </div>
              </div>
            </figure>
             <div className="container">
              <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8" style={{paddingBottom:'10px'}}>
                   <div className="main-title">
                        <h4>
                        <ReactPlaceholder type='rect' showLoadingAnimation={true} delay={1000} ready={false} color='#E0E0E0' style={{width: 150, height: 20}}>
                                 <div></div>
                        </ReactPlaceholder>
                        </h4>
                      </div>

                    <div className="row">

                          <div className="col-md-4 col-sm-4">
                                <div className="post-type-florida">
                                    <figure className="post-image">
                                       <ReactPlaceholder type='rect' showLoadingAnimation={true} delay={1000} ready={false} color='#E0E0E0' style={{ width: '100%', height: '150px' }}>
                                            <div></div>
                                          </ReactPlaceholder>

                                    </figure>
                                     <div className="post-content">
                                        
                                        <ReactPlaceholder type='text'showLoadingAnimation={true} delay={1000}  ready={false} rows={4} color='#E0E0E0'>
                                          <div></div>
                                        </ReactPlaceholder>

                                     </div>
                                </div>

                        </div>

                                  <div className="col-md-4 col-sm-4">
                                <div className="post-type-florida">
                                    <figure className="post-image">
                                       <ReactPlaceholder type='rect' showLoadingAnimation={true} delay={1000} ready={false} color='#E0E0E0' style={{ width: '100%', height: '150px' }}>
                                            <div></div>
                                          </ReactPlaceholder>

                                    </figure>
                                     <div className="post-content">
                                        
                                        <ReactPlaceholder type='text'showLoadingAnimation={true} delay={1000}  ready={false} rows={4} color='#E0E0E0'>
                                          <div></div>
                                        </ReactPlaceholder>

                                     </div>
                                </div>

                        </div>


                                  <div className="col-md-4 col-sm-4">
                                <div className="post-type-florida">
                                    <figure className="post-image">
                                       <ReactPlaceholder type='rect' showLoadingAnimation={true} delay={1000} ready={false} color='#E0E0E0' style={{ width: '100%', height: '150px' }}>
                                            <div></div>
                                          </ReactPlaceholder>

                                    </figure>
                                     <div className="post-content">
                                        
                                        <ReactPlaceholder type='text'showLoadingAnimation={true} delay={1000}  ready={false} rows={4} color='#E0E0E0'>
                                          <div></div>
                                        </ReactPlaceholder>

                                     </div>
                                </div>

                        </div>

                    </div>

                  </div>
              </div>

             </div>


         </section>




        )


    }
   
    return (
      
  
      <section className="article-detail-newyork">
       <MetaTags>
                <title>{this.state.name}</title>
                <meta name="robots" content="index, follow" />
                <meta name="Googlebot" content="follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />  
                <meta name="referrer" content="always" />
                <meta name="theme-color" content="#000000" />
                <meta content="index, follow" />
                <meta name={this.state.name}  />
                <meta name="description" content={this.state.description} />
                <meta property="og:title" content={this.state.name} />
                <meta property="og:description" content={this.state.description} />
                <meta property="og:image" content={this.state.avatarUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://nomadic.co.id/publishing/${this.state.slug}`} />

                <meta name="twitter:card" value={this.state.name} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@NomadicId" />
                <meta name="twitter:title" content={this.state.name} />
                <meta name="twitter:description" content={this.state.description} />
                <meta name="twitter:creator" content="@NomadicId" />
                <meta name="twitter:image:src" content={this.state.avatarUrl} />


            </MetaTags>
         <figure className="big-post-image" style={{backgroundImage: `url(${xxx})`, backgroundSize:'cover', backgroundPosition:'center center'}}>

           <div className="over-content">
             <div className="middle-content">
                 
                  <div className="inner">
                      <div className="row">

                              <div className="col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-5">
                 
                               <span className="post-authorx"><img src={this.state.avatarUrl} alt={this.state.name} /><a href={`${this.state.web}`}>{this.state.name}</a></span>
                                <div className="post-metasx">
                                   <p className="text-center">{this.state.description}</p>
                                </div>


                             </div>

                      </div>
                  </div>

             </div>
           </div>

         </figure>

          <div className="container">

              <div className="row">
                  <div className="col-md-2"></div>
                   <div className="col-md-8" style={{paddingBottom:'100px'}}>
                     
                       <div className="main-title">
                        <h4><strong>Latest</strong> Publications</h4>
                        <div className="pull-right" style={{marginTop:'40px', textTransform:'capitalize', fontSize:'13px'}}>

                      

                        <ul className="social-share">
                         <a href={this.state.facebook}><li><i className="fab fa-facebook" style={{fontSize:'18px'}}></i></li></a>
                         <a href={this.state.twitter}><li><i className="fab fa-twitter" style={{fontSize:'18px',margin:'0 5px'}}></i></li></a>
                          <a href={this.state.instagram}><li><i className="fab fa-instagram" style={{fontSize:'18px'}}></i></li></a>

                        </ul>



                        </div>
                      </div>
                    <div className="row">

                      {this.renderPost()}
  
                   </div>
                  </div>
              </div>
          </div>
         <Status 
          name={this.state.name}
          avatar={this.state.avatarUrl}
        />
      </section>

    )
  }
}




export default Publishing;
