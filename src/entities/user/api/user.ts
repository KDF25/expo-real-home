import { account, avatar } from "@/src/shared/database";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import {
    OAuthProvider
} from "react-native-appwrite";

export async function login() {
    try {
        const redirectUri = Linking.createURL("/");

        const response = await account.createOAuth2Token(
            OAuthProvider.Google,
            redirectUri
        );
        if (!response) throw new Error("Create OAuth2 token failed");

        const browserResult = await openAuthSessionAsync(
        response.toString(),
        redirectUri
        );
        if (browserResult.type !== "success")
        throw new Error("Create OAuth2 token failed");

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();
        if (!secret || !userId) throw new Error("Create OAuth2 token failed");

        const session = await account.createSession(userId, secret);
        if (!session) throw new Error("Failed to create session");

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function logout() {
    try {
        const result = await account.deleteSession("current");
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const result = await account.get();
        if (result.$id) {
        const userAvatar = avatar.getInitials(result.name);

        return {
            ...result,
            avatar: userAvatar.toString(),
        };
        }

        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}
