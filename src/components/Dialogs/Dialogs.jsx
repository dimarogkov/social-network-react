import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogsPerson = (props) => {
    return (
        <li>
            <NavLink to={'/dialogs/' + props.id} className={props.isActive ? s.active : null}>
                {props.name}
            </NavLink>
        </li>
    );
};

const DialogsMessage = (props) => {
    return (
        <div className={`${s.dialogs__message} ${props.isMyMessage ? s.dialogs__message_my : null}`}>
            {props.message}
        </div>
    );
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className="container">
                <div className={s.dialogs__block}>
                    <ul className={s.dialogs__people}>
                        <DialogsPerson id="1" name="Daniel" isActive={true} />
                        <DialogsPerson id="2" name="Dan" isActive={false} />
                        <DialogsPerson id="3" name="Olivia" isActive={false} />
                        <DialogsPerson id="4" name="John" isActive={false} />
                    </ul>

                    <div className={s.dialogs__messages}>
                        <div className={s.dialogs__messages_window}>
                            <DialogsMessage message="Hi!" isMyMessage={false} />
                            <DialogsMessage message="How are you?" isMyMessage={false} />
                            <DialogsMessage message="Hi! I am fine." isMyMessage={true} />
                        </div>

                        <form className={s.dialogs__messages_navigation}>
                            <input placeholder="Write message" />
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
