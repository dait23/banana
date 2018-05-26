import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {Cloudinary_Name} from '../../views/Api/';
import {Image} from 'cloudinary-react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');


class Story extends Component {


static propTypes = {

  post: PropTypes.object,
  refresh: PropTypes.func,
};

constructor(props) {
    super(props);
   this.state = {isToggleOn: true};


  }


renderBookmark(){

  if(this.state.isToggleOn == true) { 
            return (<i className="far fa-bookmark" onClick={this.handleBookmark} style={{cursor: 'pointer'}}></i>);
        } else { 
            return (<i className="fas fa-bookmark" onClick={this.handleUnbook} style={{cursor: 'pointer'}}></i>);
        } 

}

renderLog(){

  if(window.localStorage.getItem('uid') && window.localStorage.getItem('nordic') === null ){

    return(
     
      <i className="far fa-bookmark"></i>

    )


  }else{

     return(

          this.renderBookmark()
     )

  }



}

renderThumb(){
     const pic = "https://res.cloudinary.com/nomadic-id/image/facebook/c_scale,r_80,w_80/" + this.props.post.user.facebookUserId + ".jpg"

    if(this.props.post.user.avatar == '' ){

     return(

         <img src={pic} className="img-circle hidden-sm hidden-xs" style={{margin:'5px 0 0 5px', width:'33px'}} />

      )

    }else{

        return(

         <img src={this.props.post.user.avatar} className="img-circle  hidden-sm hidden-xs" style={{margin:'0px 5px 0 5px', width:'30px'}} />

      )

    }


  }



  render() {
    

    const createDT = moment(this.props.post.createdAt).format('ll')//20 Mart 2017
   
    return (
           <div className="col-md-4 col-xs-6 col-sm-6" style={{padding:'0px 20px 0 20px'}}>

         

       
             
            
              <div className="post-type-florida">
                 <figure className="post-image"><Image cloudName={Cloudinary_Name} publicId={this.props.post.imageId}  crop="thumb" height="150"  gravity="center" /></figure>
                <div className="post-content" style={{height:'150px'}}>
                  <div className="post-metas"> <span className="likes pull-left">{createDT}</span> <span className="views pull-right">{this.props.post.reading} min read</span> </div>
                
                  <h4 className="post-title" style={{height:'auto'}}><a href={`/@${this.props.post.user.username}/${this.props.post.slug}`}>{this.props.post.title}</a></h4>
                  <span className="post-author">{this.renderThumb()}<a>{this.props.post.user.member.firstName} {this.props.post.user.member.lastName}</a></span>
                  <span className="pull-right" style={{fontSize:'15px'}}>{this.renderLog()}</span> 
                </div> 
                </div>
            







           

        </div>

    )
  }
  handleBookmark = async () => {
    await this.props.mutatePost({
      variables: {
        userId: localStorage.getItem('uid'),
        postId: this.props.post.id,
      }
    })

     this.setState({ isToggleOn : false} );
  }
}



const createBookmark = gql`
  mutation createBookmark($userId: ID, $postId:ID) {
    createBookmark(userId: $userId, postId: $postId) {
      id
    }
  }
`




const SliderWithMutation = graphql(createBookmark, {name : 'mutatePost'})(Story)

export default SliderWithMutation

