def analyze_performance(data):

    focus_index = (
        data["memory_accuracy"] +
        data["rhythm_accuracy"]
    ) / 2

    stress_resistance = (
        100 - data["missed_inputs"]
    )

    return {
        "focus_index": focus_index,
        "stress_resistance": stress_resistance
    }