import styles from './Box.module.css'
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
function TextBox(props) {
    return (
        <div
            className={styles.Box}
            style={{
                ...props.wt,
                ...props.hg,
            }}
        >
            {props.title &&
                <h3
                    className={styles.BoxH3}
                    style={props.description && { borderBottom: '1px solid #00fe6e' }}
                >
                    {props.title}</h3>
            }
            {props.description &&
                <text className={styles.BoxText} 
                style={{
                    ...props.jC,
                    ...props.aI
                }}
                >
                    {props.description}</text>}

            <ul className={styles.BoxUl}>
                {props.instagram &&
                    <a href={props.instagramLink}><li><AiOutlineInstagram />{props.instagram}</li></a>
                }
                {props.facebook &&
                    <a href={props.facebookLink}><li><FaFacebookF />{props.facebook}</li></a>
                }
                {props.github &&
                    <a href={props.githubLink}><li><AiFillGithub />{props.github}</li></a>
                }
                {props.linkedin &&
                    <a href={props.linkedinLink}><li><AiFillLinkedin />{props.linkedin}</li></a>
                }
            </ul>

        </div>
    )
}
export default TextBox