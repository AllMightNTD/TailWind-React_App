import './App.css';
import Nav from './components/Nav';
import AuthButtons from './components/AuthButtons';
import Header from './components/Header';
import Trending from './components/Trending';
function App() {
    // Chia 5 cot
    return (
        // md : ít nhất 768px : kích cỡ medium mới là 5 cột
        <div className="grid md:grid-cols-5 ">
            <Nav />
            {/* 4 cot tren md : màn hình medium */}
            <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
                <AuthButtons />
                <Header />
                <Trending />
            </main>
        </div>
    );
}

export default App;
