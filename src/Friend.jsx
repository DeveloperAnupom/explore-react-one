
export default function Friend ({Prop}) {
    const {name , email} = Prop;
    return (
        <div className="Box">
            <h3>Name : {name}</h3>
            <h3>Email :{email} </h3>
        </div>
    )
}