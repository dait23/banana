import React from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Cloudinary_Name} from '../../views/Api/';
import {Image} from 'cloudinary-react';

import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

//cloudinaryConfig({ cloud_name: Cloudinary_Name });

class List extends React.Component {

  static propTypes = {
    post: PropTypes.object,
    refresh: PropTypes.func,
  }

renderThumb(){
     const pic = "https://res.cloudinary.com/nomadic-id/image/facebook/c_scale,r_80,w_80,h_80/" + this.props.post.user.facebookUserId + ".jpg"

    if(this.props.post.user.avatar == '' ){

     return(

         <img src={pic} className="img-circle" style={{margin:'5px 0 0 5px', width:'33px'}} />

      )

    }else{

        return(

         <img src={this.props.post.user.avatar} className="img-circle" style={{margin:'0px 5px 0 5px', width:'30px'}} />

      )

    }


  }



  render () {

     const createTime= this.props.post.createdAt;
      const createDT = moment(createTime).format('ll')//20 Mart 2017
       // const pic = "https://res.cloudinary.com/nomadic-id/image/facebook/c_scale,r_80,w_80/" + this.props.post.user.facebookUserId + ".jpg"
       /////////
       var myString = this.props.post.headline;
       const newHeadline = myString.substr(0, myString.length-30); 

    return (     


           <div className="post-type-newyork">

            <div className="row">
             
             <div className="col-md-3">
                     <figure className="post-image" style={{paddingRight:'0px'}}> <Image cloudName={Cloudinary_Name} publicId={this.props.post.imageId}  gravity="center" width="110" height="110" crop="thumb"  alt={this.props.post.title}/></figure>
              
             </div>
             <div className="col-md-9">
             
              <div className="post-content" style={{width:'100%'}}>
               
                <h4 className="post-title"><a href={`/@${this.props.post.user.username}/${this.props.post.slug}`}>{this.props.post.title}</a></h4>
                <p>{newHeadline}</p>
                  
                <span className="post-author"><a href={`/@${this.props.post.user.username}`}>{this.props.post.user.member.firstName} {this.props.post.user.member.lastName}</a></span> <span className="post-date">- {createDT} &nbsp; <i className="fas fa-star" style={{fontSize:'8px'}}></i>&nbsp; {this.props.post.reading} min read</span>
              </div>



             </div>

            </div>


             
            </div>
     
                    
    )
  }


}


export default List
