import { computed } from 'vue'

const useChart = (series, xAxisRange, yAxisRange, xAxisTitle, yAxisTicksuffix) => {
    const chart = computed(() => {
        const layout = {
            xaxis: {
                range: xAxisRange,
                title: {
                    text: xAxisTitle
                },
                showticklabels: false,
                linecolor: "rgb(51,153,255)",
                linewidth: 3
            },
            yaxis: {
                range: yAxisRange,
                title: {},
                showticklabels: true,
                showticksuffix: "last",
                ticksuffix: yAxisTicksuffix,
                linecolor: "rgb(51,153,255)",
                linewidth: 3
            },
            showlegend: false
        }

        return { layout, data: series }
    })

    return chart
}

export default useChart