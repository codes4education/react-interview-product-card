import {useState, useEffect} from 'react';


const mockData = [
    {
      id: 1,
      name: "Strawberries",
      description: "Fresh and organic strawberries.",
      price: 5,
      deliveryTime: "In 60 mins",
      imageUrl: "https://i.postimg.cc/4xdYDpvj/pexels-karolina-grabowska-4038803.jpg"
    },
    {
      id: 2,
      name: "Blueberries",
      description: "Delicious blueberries with nutrients.",
      price: 8,
      deliveryTime: "In 45 mins",
      imageUrl: "https://i.postimg.cc/cJ2J3jnc/pexels-angele-j-35172-139751.jpg"
    }
  ]; 

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        if(mockData?.length > 0){
                            resolve(mockData);
                        }else{
                            reject("No Data Available");
                        }
                    },500)
                })

                setData(response);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        };

        fetchData();

    },[])
    
  return {data, loading, error};
}

export default useFetch