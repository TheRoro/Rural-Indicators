import axios from "axios";
import baseURL from "./baseURL";

const compareTwoIndicators = async (indicator1: string, indicator2: string) => {
    try {
        var apiUrl = `${baseURL}/indicators/${indicator1}/${indicator2}`;
        const resp = await axios.get(apiUrl);
        return resp.data;
    }
    catch (err) {
        alert("Couldn't fetch information");
    }
}

export const kMeansClusters = async (indicator1: string, indicator2: string) => {
    try {
        var apiUrl = `${baseURL}/kmeans/${indicator1}/${indicator2}`;
        const resp = await axios.get(apiUrl);
        return resp.data;
    }
    catch (err) {
        alert("Couldn't fetch information");
    }
}

export default compareTwoIndicators;