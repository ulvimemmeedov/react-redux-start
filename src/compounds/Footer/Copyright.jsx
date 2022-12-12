import React from 'react';
import appConfig from '../../app/config';

export default function Copyright() {
    return (
        <div className="text-center p-6 bg-gray-200">
            <span>© 2022 {appConfig.appName}: </span>
            <a className="text-gray-600 font-semibold" href={appConfig.git}>{appConfig.appName}</a>
        </div>
    )
}
