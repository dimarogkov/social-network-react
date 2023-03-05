import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className="container">
                <div className={s.dialogs__block}>
                    <ul className={s.dialogs__people}>
                        <li className={s.active}>Andre</li>
                        <li>Dan</li>
                        <li>Olivia</li>
                        <li>John</li>
                    </ul>

                    <div className={s.dialogs__messages}>
                        <div className={s.dialogs__messages_window}>
                            <div className={s.dialogs__message}>Hi!</div>
                            <div className={s.dialogs__message}>How are you?</div>
                            <div className={`${s.dialogs__message} ${s.dialogs__message_my}`}>Hi! I am fine.</div>
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
