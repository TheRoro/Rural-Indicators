import axios from "axios";

const compareTwoIndicators = async (indicator1: string, indicator2: string) => {
    try {
        var apiUrl = `https://go-apii.herokuapp.com/indicators/${indicator1}/${indicator2}`;
        const resp = await axios.get(apiUrl);
        return resp.data;
    }
    catch (err) {
        alert("Couldn't fetch information");
    }
}

export default compareTwoIndicators;