const LOGIN_ENDPOINT = 'http://localhost:8000/users/login';
const REGISTER_ENDPOINT = 'http://localhost:8000/users/register';

interface LoginResponse {
    access_token: string;
    token_type: string;
}

interface RegisterResponse {
    success: boolean;
    message: string;
}

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData {
    username: string;
    password: string;
    email: string;
}
// curl -X 'POST' \
//   'http://localhost:8000/users/login' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/x-www-form-urlencoded' \
//   -d 'grant_type=password&username=string&password=string&scope=&client_id=string&client_secret=string'
export async function login(data: LoginData): Promise<LoginResponse> {
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append('grant_type', 'password');
    urlEncodedData.append('username', data.username);
    urlEncodedData.append('password', data.password);
    urlEncodedData.append('scope', '');
    urlEncodedData.append('client_id', 'string');
    urlEncodedData.append('client_secret', 'string');

    const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
        },
        body: urlEncodedData.toString(),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const result: LoginResponse = await response.json();
    console.log(result);
    document.cookie = `token=${result.access_token}`;
    return result;
}

export async function register(data: RegisterData): Promise<RegisterResponse> {
    const response = await fetch(REGISTER_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    const result: RegisterResponse = await response.json();
    return result;
}