import JumboTron from 'react-bootstrap/Jumbotron';

export default function Header(props){
    return (
        <div>
            <JumboTron>
                <h1>Created by {props.name}!</h1>
            </JumboTron>
        </div>
    );
}