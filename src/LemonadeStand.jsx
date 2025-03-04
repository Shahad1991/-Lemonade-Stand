import { useDispatch, useSelector } from 'react-redux';
import { sell, buy } from './redux/profitSlice'; // Opdateret sti
import './App.css';

function LemonadeStand() {
  const profit = useSelector((state) => state.profit);
  const dispatch = useDispatch();
  return (
    <div className="p-6 bg-yellow-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Lemonade Stand</h1>
        <p className="text-2xl mb-4">Profit: ${profit}</p>
        <div className="space-x-4">
            <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => dispatch(sell())}
            >
                Sælg lemonade (+$5)
            </button>
            <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => dispatch(buy())}
            >
                Køb citroner (-$2)
            </button>
        </div>
    </div>
);
}

export default LemonadeStand;