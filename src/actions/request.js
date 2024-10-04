import axios from "axios";

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api",
});

const getGeoData = async () => {
  const res = await api.get("/v1/localidades/estados");

  const geoData = res.data.map((e) => {
    return {
      id: e.id,
      name: e.nome,
      value: Math.floor(Math.random() * 300000000),
    };
  });

  return geoData;
};

const getGeoLocation = async (geoData) => {
  const geoLocation = [];

  for (let index = 0; index < geoData.length; index++) {
    const { data } = await api.get(
      `v2/malhas/${geoData[index].id}?formato=application/vnd.geo+json`
    );

    data.features[0].properties = {
      name: geoData[index].name,
    };
    geoLocation.push(...data.features);
  }

  const res = {
    type: "FeatureCollection",
    features: geoLocation,
  };

  return res;
};

export { getGeoData, getGeoLocation };
