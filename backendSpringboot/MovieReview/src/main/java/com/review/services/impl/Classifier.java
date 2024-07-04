package com.review.services.impl;

import java.io.Serializable;

public class Classifier implements Serializable {
    private double[] classProbabilities;
    private double[][] featureProbabilitiesGivenClass;

    // Constructor to initialize the classifier with probabilities
    public Classifier(double[] classProbabilities, double[][] featureProbabilitiesGivenClass) {
        this.classProbabilities = classProbabilities;
        this.featureProbabilitiesGivenClass = featureProbabilitiesGivenClass;
    }

    // Method for making predictions
    public int predict(double[] features) {
        double[] positiveProbabilities = calculateClassProbabilities(features);
        
        // If the probability of positive sentiment is above 0.5, predict positive sentiment (1),
        // otherwise predict negative sentiment (0)
        return positiveProbabilities[1] > 0.5 ? 1 : 0;
    }

    // Method to calculate probabilities of each class (positive and negative)
    private double[] calculateClassProbabilities(double[] features) {
        double[] positiveProbabilities = new double[2]; // [0] for negative, [1] for positive
        for (int i = 0; i < 2; i++) {
            positiveProbabilities[i] = Math.log(classProbabilities[i]); // Prior probability
            for (int j = 0; j < features.length; j++) {
                positiveProbabilities[i] += Math.log(featureProbabilitiesGivenClass[i][j] * features[j]);
            }
        }
        return positiveProbabilities;
    }
}
