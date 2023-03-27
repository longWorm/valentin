import React from "react";
import {
  Typography,
  Grid,
  GridList,
} from "@material-ui/core";
import stephania from "./public/Photos/Testimonials/Stefania Ferrario.jpg";
import jessica from "./public/Photos/Testimonials/Jessica.jpg";
import ben from "./public/Photos/Testimonials/Ben Knight.jpg";
import lane from "./public/Photos/Testimonials/Lane Milburn.jpg";
import faith from "./public/Photos/Testimonials/Faith Teo.jpg";
import negin from "./public/Photos/Testimonials/Negin Talebi Tamajani.jpg";
import natasha from "./public/Photos/Testimonials/Natasha Abdullah.jpg";
import amutha from "./public/Photos/Testimonials/Amutha Ravindran.jpg";
import shamita from "./public/Photos/Testimonials/Shamita Siva.jpg";
import ruth from "./public/Photos/Testimonials/Ruth Cheah.jpg";
import josh from "./public/Photos/Testimonials/Josh Deane.jpg";
import joshua from "./public/Photos/Testimonials/Joshua James.jpg";
import katia from "./public/Photos/Testimonials/Katia Pshenichner.jpg";

class Testimonials extends React.Component {
    render() {
        return (
            <Grid container spacing={3} style={{  maxHeight: '100%', overflowY: 'scroll'}}>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={stephania} alt="Stephania" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Stefania Ferrario – Model, Activist</Typography>
                  <br />
                  <Typography variant="body1" align="center">Working with Valentin is a pleasure, he has fantastic attention to detail and an incredible depth of knowledge on Portrait Lighting. He captures images of me that are unique and classic.</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={jessica} alt="Jessica" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Jessica Watts – Model, Actor</Typography>
                  <br />
                  <Typography variant="body1" align="center">Valentin was a pleasure to work with, we collaborated on a shoot where we let the wind guide us and created some really special photos. I've been modelling for over 15 years and found Valentin to be professional and yet also a lot of fun to work with, there was a sense of freedom to make something we could both be proud of, the results are proof of this.</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={ben} alt="Ben" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Lane Milburn – Tattoo Artist</Typography>
                  <br />
                  <Typography variant="body1" align="center">I recently worked with Valentin for a series of portraits and couldn't be happier with the results. His friendly demeanour made me feel super comfortable and his work is absolutely incredible! Cannot recommend highly enough. Legend of a bloke and fantastic photographer!</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={lane} alt="Lane" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Jessica Watts – Model, Actor</Typography>
                  <br />
                  <Typography variant="body1" align="center">Valentin invited me to take part in a project as part of a creative trade. I am not a model, but I know the importance of consent and safety, which Valentin prioritised and took seriously by encouraging me to bring a support person, providing a brief, and keeping the process collaborative. I've always been a big fan of his work, and it was great to see his passion for it in the studio.</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={faith} alt="Faith" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Faith Teo – Creative Director</Typography>
                  <br />
                  <Typography variant="body1" align="center">Valentin was an absolutely delightful photographer to work with, professional from start to finish. I feel at ease and comfortable, he's a real artist, highly intuitive and talented.</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={negin} alt="Negin" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Negin Talebi Tamajani – Model</Typography>
                  <br />
                  <Typography variant="body1" align="center">The shoot was comfortable, fun and professional. The final result was absolutely stunning also.</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={natasha} alt="Natasha" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Natasha Abdullah</Typography>
                  <br />
                  <Typography variant="body1" align="center">I had met Valentin at the start of 2022 when he did my first photo shoot for me. I had been following his work through Instagram for quite some time and admired the pictures, details and people he had always included in his photo shoots.
At the moment we had first met Valentin was professional yet very friendly. He made me feel welcomed, comfortable and reassured me with his guidance. It was my first photo shoot done professionally.
Throughout the session we had, I was unsure on what to do or how to pose. Valentin guided me through the process, gave some instructions and even let me be creative in my own way with poses and how I would like my picture to be taken. It made me feel strong and beautiful. I observed how he did the shoot, clearly knowing what he was doing and how amazing the pictures turned out.
I wish to see him progress further and showing the world his art and talents. I look forward to hopefully more photo shoots and recommending many more people for his skills and/or creative advice and ideas.</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={amutha} alt="Amutha" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Amutha Ravindran – Singer, Song Writer</Typography>
                  <br />
                  <Typography variant="body1" align="center">Valentin was great to work with, he took spontaneous photos the really felt like they represented me. I was able to be myself and it reflected perfectly in the final product. Would recommend working with this amazing talent!</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={shamita} alt="Shamita" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Shamita Siva – Actor, Performance Artist</Typography>
                  <br />
                  <Typography variant="body1" align="center">Valentin has a great way of capturing personalities and has very good attention to detail. His experience and years of practice are a testament to his craft, and I love how he can turn a simple set up into a striking photo. I've worked with him several times and he knows his stuff! Whether it's product photography or fashion it's undeniable he has a keen eye.
I particularly love Valentin's black and white portraiture, and he is able to balance simplicity with an engaging portrait very well. I enjoy Valentin's sense of composition as I personally like more creative posing and Valentin is good at experimenting to create shots that work. Valentin is professional and respectful, and I always feel comfortable shooting with him</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={ruth} alt="Ruth" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Ruth Cheah - Dancer</Typography>
                  <br />
                  <Typography variant="body1" align="center">Valentin is a meticulous, talented, detail oriented artist who brings a special touch of simplistic quality to his photographs. This simplistic touch is yet magnetizing to all who see his photos. I have worked with Valentin both in an individual, duo and trio capacity and his creative input in direction always creates stunning results both conceptually and visually. His calm quiet nature allowed me to get into the flow of movements, maintain focus and exercise creative freedom;
however Valentin easily also knows intuitively when to gently redirect poses, suggest alternative concepts to better enhance the overall result of the pictures when required to capture the models at their best.</Typography>
<br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={josh} alt="Josh" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Josh Deane – Model, Artist</Typography>
                  <br />
                  <Typography variant="body1" align="center">I worked with Valentin, on a headshot shoot for my modelling portfolio he was very professional and really easy to work with. I was really happy with all the shots and the fact he was able to capture all the photos I needed and more within a few hours. Couldn't recommend him enough.</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={joshua} alt="Joshua" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Joshua James</Typography>
                  <br />
                  <Typography variant="body1" align="center">Valentin's photography is second to none. He is very easy to work with, provides a great quality and service, as well as a comfortable environment. What attracted me to his work was the clarity of his profiles and how he brings the best out of all client's features. I would certainly work with him again.</Typography>
                  <br />
                </Grid>
                <Grid item xs={12} sm={6} md={4} align="center">
                  <img src={katia} alt="Katia" height="300" align="center"/>
                  <br />
                  <Typography variant="h6" align="center">Katia Pshenicher – Singer, Songwriter</Typography>
                  <br />
                  <Typography variant="body1" align="center">I worked with Valentin in 2015 when I was preparing to release my album and needed some great headshots for the release. Valentin was amazing to work with. Not only did he take incredible and creative photos, but he was a joy to work with and made me feel relaxed during the photoshoot. Thank you!</Typography>
                  <br />
                </Grid>
            </Grid>
          );
    }
}

export default Testimonials;