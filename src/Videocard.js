import Avatar from "@material-ui/core/Avatar";
import React from "react";

function Videocard({image, title ,channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
           <img src ={image} slt="" />
           <div className="videoCard__info">
               <Avatar className ="videoCard__avatar" 
               alt={channel}
               src={channelImage}
               />

               <div className="video__text">

              <h4>{title}</h4>

              <p>{channel}</p>

              <p>
              {views} . {timestamp}
              </p>

            

               </div>

          </div>

         </div>
    );
}

export default Videocard;
