

export default featureId => {
    return featureId.indexOf('felwine-') === 0 ? `${featureId}` : `felwine-${featureId}`
}
