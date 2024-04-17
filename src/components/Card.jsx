import style from '../css/Card.module.css';

export default function Card(props) {
    return (
        <div class={style.card}>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}