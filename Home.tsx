import React, { useEffect, useState } from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import * as Sentry from '@sentry/react-native';


const Home = () => {

    // Send a message to Sentry
    const handleSubmit = () => {
        console.log('Sending message to Sentry');

        Sentry.captureMessage('Test Message from React Native', 'info');
    }

    // Trigger an error to Sentry
    const triggerError = () => {
        try {
            throw new Error('This is a test error from React Native');
        } catch (error) {
            console.log('Sending error to Sentry');

            Sentry.captureException(error);
        }
    };


    return (
        <SafeAreaView>
            <Button
                onPress={handleSubmit}
                title="Log Message to Sentry"
                color="#000010"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={triggerError}
                title="Log Error to Sentry"
                color="#000010"
                accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
});

export default Home;