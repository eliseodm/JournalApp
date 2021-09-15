import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.hd-tecnologia.com/imagenes/articulos/2020/06/Activision-est%C3%A1-evaluando-plataformas-adicionales-para-Crash-Bandicoot-4-Llegar%C3%A1-a-PC-y-Nintendo-Switch-1280x720.jpeg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Ea consequat pariatur excepteur anim do ad.
                </p>
            </div>

            <div className="journal__entry-time-box">
                <span>Monday</span>
                <h4>22</h4>
            </div>
            
        </div>
    )
}
