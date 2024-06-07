// passing original component as parameter

// HOC ClickTrackingHOC
interface WrappedComponentProps {
    label: string;
    className: string;
    trackingInfo: string;
  }
  //By using the generic <P extends WrappedComponentProps>, we ensure that the props passed to the HOC include
  // the properties defined in WrappedComponentProps.
const withClickTracking = <P extends WrappedComponentProps>(WrappedComponent: React.ComponentType<P>) =>{
    return(props: P) => {
        const handleClick = () =>{
            console.log('Click tracked', props.trackingInfo);
        };
        return(
            <div onClick={handleClick} >
                <WrappedComponent {...props}/>
            </div>
        )
    }
};

//original component

const Button: React.FC<WrappedComponentProps> =(props) =>{
    return <button className={props.className}> {props.label}</button>;
};


//Applying the Hoc to the original component
const ButtonWithClickTracking = withClickTracking(Button);

const HOC1:React.FC =() =>{
    return(
        <div>
            <h1>HOC Example</h1>
            <HOC4/>
            <ButtonWithClickTracking className="p-1 m-1 bg-green-400 font-2xl" label="Click Me" trackingInfo="Button 1"/>
            <ButtonWithClickTracking className="p-1 m-1  bg-blue-400" label="Click Me Too" trackingInfo="Button 2"/>
        </div>
    );
};
export default HOC1;

interface withstyleProps {
    src:string;
    href:string;
    className:string;
}
const WithStyleIcon =<P extends withstyleProps> (WrappedCom: React.ComponentType<P>)=>{
    return(props:P)=>(
        <div className={props.className}>
            <WrappedCom {...props}/>
        </div>
    )
}
//original component

const IconStyle: React.FC<withstyleProps> = (props) =>{
    return(
        <a href={props.href} target="_blank" rel="noopener noreferrer" >
            <img className="w-10 h-10 p-2" src={props.src} alt="social"/>
        </a>
    )
}
const IconCom = WithStyleIcon(IconStyle);

const HOC4 = ()=>{
    return(
        <div className="flex flex-row justify-center">
            <IconCom className="p-1" href="https://www.instagram.com/" src="/instagram.png"/>
            <IconCom className="p-1" href="https://www.linkedin.com/" src="/linkedin.png"/>
            <IconCom className="p-1" href="https://www.youtube.com/" src="/youtube.png"/>
            <IconCom className="p-1" href="https://www.instagram.com/" src="/vite.svg"/>
            
        </div>
    )
}