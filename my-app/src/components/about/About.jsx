  import "./about.css"
  import Programmer from "../../img/programmer.jpg";

 const About = () => {
    return (
        <div className="a">
          <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
             <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
             alt= ""  
             classname="a-img" />
                  </div>  
          </div>
          <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
           I have become a trained Web Developer and ready to take new assignments in IT as a Web Developer. 

        </p>
        <div className="a-programmer">
          <img src={Programmer} alt="" className="a-programmer-img" />
          <div className="a-programmer-texts">
            <h4 className="a-programmer-title"></h4>
            <p className="a-programmer-desc">
            My skills set includes following Technologies :React/Redux, Typescript, HTML5, CSS3,SASS, Bootstrap,GIT, VisualStudio and Docker.

            </p>
          </div>
        </div>
          </div>
        </div>
    );
};
export default About;