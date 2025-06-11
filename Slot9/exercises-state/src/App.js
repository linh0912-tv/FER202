import Counter from "./Vidu4/Ex1";
import Input from "./Vidu4/Ex2";
import Toggle from "./Vidu4/Ex3";
import TodoApp from "./Vidu4/Ex4";
import ColorSwitcher from "./Vidu4/Ex5";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SearchFilter from "./Vidu4/Ex6";
import DragAndDropList from "./Vidu4/Ex7";
import ProductList from "./Vidu3";
import Nhap from "./Vidu2";
import Counters from "./Vidu1";
function App() {

  return(
    <div>
    <Counters/>
    <Nhap/>  
    <ProductList/>   
    <Counter/>
    <Input/>
    <Toggle/>
    <TodoApp/>
    <ColorSwitcher/>
    <SearchFilter/>
<DragAndDropList/>
    </div>

  )
}
  
export default App;
