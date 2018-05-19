import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { graphql, compose } from 'react-apollo'
import MetaTags from 'react-meta-tags';
import { toast, ToastContainer } from 'react-toastify';
import {Image} from 'cloudinary-react';

import {MainApi, Cloudinary_Name} from '../Api/';
import NotFound from'../../views/404/'
import gql from 'graphql-tag'

class Report extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      data:'',
      text:'',
      loading: true,
    }
  
  }

  
////////////////// did mount 
  componentDidMount() {
    var that = this;
    that.getData();
  }

  ////////////////////get data

  getData(){
     var that = this;
     that.setState({
          loading: true
      });
     var fetch = require('graphql-fetch')(MainApi)

          var query = `
            query Post($id: ID!) {
              Post(id: $id){
              id
              title
              slug
              headline
              imageId
              imageUrl
               user{
                id
                username
               }
             
              }
            }
          `
          var queryVars = {
            id: this.props.match.params.id
          }
          var opts = {
            // custom fetch options
          }


          fetch(query, queryVars, opts).then(function (results) {

            //console.log(results)
            if (results.errors) {
             // console.log('cccc')
              //...
             // window.location= "/";
            }
            //var BlogCategory = results.data.BlogCategory


           if ( results.data.Post == null){

               //window.location= "/";

           }else{

              that.setState({
              data: results.data.Post,
              id:results.data.Post.id,
              title:results.data.Post.title,
               slug:results.data.Post.slug,
              headline:results.data.Post.headline,
              imageUrl:results.data.Post.imageUrl,
              imageId:results.data.Post.imageId,
               username:results.data.Post.user.username,

             
              loading:false
             });
           }

            

           
          })
 

  }





  render() {

    if(localStorage.getItem('nordic') == null && localStorage.getItem('uid') == null ){


    return(

               <NotFound />

      )


  }

   if (this.state.loading) {
      return ( 
          <div>
            <div className="candy-wrapper">
          <div className="main">
            <div className="row inner" style={{paddingTop:'100px'}}>

            <div className="col-md-3"></div>
              

            <div className="col-md-9">
                <div className="main-title">
                  <h4><strong>Report</strong> Storie</h4>

                </div>

                <div className="col-xs-12">
                    
                     Loading....

                </div>
            </div>

           

              {/* end for row */}

            </div>
           </div>
    
        </div>
            </div>

        )

    }
   
   
    return (
      
      <div>
        <ToastContainer autoClose={2000} />

       <div className="candy-wrapper">
          <div className="main">
            <div className="row inner" style={{paddingTop:'100px'}}>

            <div className="col-md-3"></div>
              

            <div className="col-md-9">
                <div className="main-title">
                  <h4><strong>Report</strong> Storie </h4>
                   
                </div>

                <div className="row">
                    <div className="col-xs-12">


                    <div className="post-type-california" style={{borderBottom:'1px solid #ccc', paddingBottom:'10px'}}>

                  <figure className="post-image-draft"><Image cloudName={Cloudinary_Name} publicId={this.state.imageId} crop="thumb" height="50" width="50"/></figure>
            
                   <div className="post-content">
                    <a href={`/@${this.state.username}/${this.state.slug}`}>  <h4 className="post-title">{this.state.title}</h4></a>
                    
                      <span className="post-date" style={{marginLeft:'-0px', marginTop:'-5px'}}>@{this.state.username}</span> 
                   
                    
                   </div>

                   
                   
              </div>
           
            <div className="form-story" style={{marginTop:'0px'}}>
       
                  <Form>
                          <FormGroup row>
                           
                            <Col sm={12}>
                             
                                    <textarea 
                                     onChange={(e) => this.setState({text: e.target.value})}
                                     value={this.state.text}
                                    className="form-control" id="area" name="comment" rows="3"  placeholder="Write why report for this storie...." style={{display:'block', resize: 'none', border:'none', boxShadow:'none'}}


                                   />
                                   {this.state.text &&
            <div>    
                         
                          <div onClick={this.handlePost} style={{background:'#000', padding:'5px 10px', color:'#fff', width:'auto', cursor:'pointer', textAlign:'center',float:'left'}}>Report</div>
            </div>
          }     
                             
                            </Col>
                          </FormGroup>
                  </Form>



                   </div>
                    
                    
                      
                </div>
                </div>

                
            </div>

           

              {/* end for row */}

            </div>
           </div>
    
        </div>

      </div>

    )
  }

 handlePost = async () => {
  
    if (localStorage.getItem('uid') == null) {
      console.warn('only logged in users can create new posts')
      return
    }
     
    const userId = localStorage.getItem('uid');
    const postId = this.state.id;
    const { text } = this.state
  
    await this.props.createReportMutation({variables: { text , userId, postId }})
     toast('Report Success', { type: toast.TYPE.SUCCESS, autoClose: 2000 }, setTimeout("location.reload(history.go(-1));",2000))
  }

}

const CREATE_SAVE_REPORT = gql`
  mutation CreateReportMutation (
      $text: String,
      $userId: ID,
      $postId: ID
  ) {
    createReport(
        text: $text,
        userId: $userId,
        postId: $postId

    ) {
      id
    }
  }
`

export default compose(
 
   graphql(CREATE_SAVE_REPORT, { name: 'createReportMutation' })
)(withRouter(Report))

