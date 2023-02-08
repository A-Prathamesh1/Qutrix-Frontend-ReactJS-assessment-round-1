import { Outlet } from 'react-router-dom';

function Root() {
        return (
                <>
                        <h1>Qutrix Offline Assessment: 1st Round</h1>
                        <main>
                                <Outlet />
                        </main>
                </>
        );
}

export default Root;
