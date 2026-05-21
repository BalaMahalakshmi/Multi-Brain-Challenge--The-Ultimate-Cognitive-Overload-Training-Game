def adjust_difficulty(player_data):

    difficulty = 1

    score = player_data["score"]

    reaction = player_data["reaction_time"]

    recall = player_data["recall_accuracy"]

    stress = player_data["stress_level"]

    if score > 80:
        difficulty += 2

    if reaction < 0.5:
        difficulty += 1

    if recall > 90:
        difficulty += 2

    if stress < 40:
        difficulty += 1

    
    return min(difficulty, 10)