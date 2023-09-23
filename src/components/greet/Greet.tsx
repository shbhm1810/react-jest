 interface IGreetProps {
    name?: string
 }
 
 const Greet = (props: IGreetProps) => {
    return <div>{`Hello ${props.name ? props.name: ''}`}</div>
}

export default Greet